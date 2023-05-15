import Hero from "@Component/Hero"

const News = () => {
  //object of test
  const data = {
    title: 'Latest news',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
    buttonContent: 'play',
    urlImage: '',
    urlVideo: 'https://www.youtube.com/embed/hlL9hcCNS6U'
  }

  return (
    <div>
      <Hero data={data} />
    </div>
  )
}

export default News
