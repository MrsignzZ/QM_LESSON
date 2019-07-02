import { withRouter } from "next/router"
import Head from 'next/head'
import Link from "next/link"
import styled from "styled-components";
import Comp from '../components/comp'

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`

const A = ({ router, name }) => <Link href="#aaa">
  <>
    <Title>This is title</Title>
    <Link href="#aaa">
      <a className="link">
        A {router.query.id} {name}
      </a>
    </Link>
    <style jsx>
      {`
        a {
          color: red;
        }
        .link {
          color: green;
        }
      `}
    </style>
  </>
</Link>

A.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'MrsignzZ'
      })
    }, 2000);
  })

  return await promise
}

export default withRouter(A)