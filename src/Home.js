import { useEffect, useState } from "react";
import BlogList from "./Bloglist";

const Home = () => {
  // const handleClick = (e) => {
  //   console.log('hello ninjas', e);
  // }

  // const handleClickAgain = (name, e) => {
  //   console.log('hello ' + name, e.target);
  // }

  // const [name, setName] = useState('mario');
  // const [age, setAge] = useState(25);
  // const handleClick = () => {
  //   setName('luigi');
  //   setAge(30);
  // }

  // const [blogs, setBlogs] = useState([
  //   { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  // ]); 

    //const [name, setName] = useState('mario');

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setIsPending(false);
        })
    }, 200);
  }, []);
  
  // useEffect(() => {
  //   console.log('use effect ran');
  //   console.log(name);
  // }, [name]); 

  return (
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
     
      {/* <button onClick={()=>setName('luigi')}>change name</button>
      <p>{name}</p> */}
      
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}

      {/* <h2>Homepage</h2>
      <p>{ name } is {age} years olds</p> 

      <button onClick={handleClick}>Click me</button>
      */}
      {/* <button onClick={(e) => {
        handleClickAgain('mario', e);
      }}>Click me again</button> */}
    
    </div>
  );
}
 
export default Home;

// npx json-server --watch data/db.json --port 8000