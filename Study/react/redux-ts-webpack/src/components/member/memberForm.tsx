import * as React from 'react';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';
import { members } from '../../api/member/mockData';
import { MemberRow } from '../members/memberRow';
import { MemberHeader } from '../members/memberHeader';
import { Link } from 'react-router-dom';
// 没用state

interface State {
  members: MemberEntity[];
}
interface Props {}

export class MemberForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }
  public componentDidMount() {
    memberAPI.fecthMembersAsync().then(members => {
      this.setState({
        members
      });
    });
  }

  public render() {
    return (
      <div className="row">
        <h2>Members Page</h2>
        <Link to="/member">New Member</Link>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {this.state.members.map(member => (
              <MemberRow key={member.id} member={member} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
