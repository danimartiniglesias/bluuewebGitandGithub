import Link from "next/link"
import Layout from "../../components/Layout"
export default function index({data}) {
  return (
    <Layout>
      
        <h1>Lista de blog</h1>
        {
          data.map(({id, title, body}) => (
            <div key={id}>
              <h2>
                <Link href={`/blog/${id}`}>
                  <a>{id} - {title}</a>
                </Link>
              </h2>
              <p>{body}</p>
            </div>
          ))
        }
    </Layout>
  )
} 

export async function getStaticProps (){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error);
  }
}