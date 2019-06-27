import { withRouter } from "next/router";
import Link from "next/link";
import Comp from '../components/comp'

const A = ({ router, name }) => <Link href="#aaa">
  <a>A{router.query.id} {name}</a>
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