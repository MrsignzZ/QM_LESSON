import { MemberEntity } from "../../model";
import { members } from "./mockData";

// 组件划分的粒度、玄幻、每个都可以做一个组件
// 函数式组件 <Prop>({member})
const baseURL = 'https://api.github.com/orgs/lemoncode'

// 生命周期之中， thenable
const fecthMembers = () :Promise<MemberEntity[]> => {
  return Promise.resolve(members)
}

const fecthMembersAsync = () :Promise <MemberEntity[]> => {
  const membersURL = `${baseURL}/members`;
  return fetch(membersURL)
    .then(response => response.json())
    .then(mapToMembers)
}
// 数据any 转化成MemberEntity
const mapToMembers = (githubMembers: any[]): MemberEntity[] => {
  return githubMembers.map(mapToMember)
}

const mapToMember = (githubMember): MemberEntity => {
  return {
    id: githubMember.id,
    login: githubMember.login,
    avatar_url: githubMember.avatar_url
  }
}

const saveMember = (member: MemberEntity) :Promise<boolean>=> {
  return Promise.resolve(true)
}


export const memberAPI = {
  fecthMembers,
  fecthMembersAsync,
  saveMember
}