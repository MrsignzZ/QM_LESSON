export default (Comp) => {
  return function TestHocComp({ Component, pageProps, ...rest }) {
    // const name = name + '123'
    console.log(Component, pageProps);
    if (pageProps) {
      pageProps.test = '123'
    }

    return <Comp Component={Component} pageProps={pageProps} {...rest} />
  }
}