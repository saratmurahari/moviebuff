import Layout from '../../components/layout/layout'
const HomeContent = () => {
  return (
    <>
      <div>Home Content</div>
    </>
  )
}
const Home = () => {
  return <Layout content={<HomeContent />} />
}
export default Home
