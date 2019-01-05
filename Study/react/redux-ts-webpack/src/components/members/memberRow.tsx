import * as React from 'react';
import { MemberEntity } from '../../model';
import { members } from '../../api/member/mockData';

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.StatelessComponent<Props> = ({ member }) => {
  return (
    <tr key="member.id">
      <td>
        <img src={member.avatar_url} className="avatar" />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  );
};
