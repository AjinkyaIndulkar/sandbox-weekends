import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Car({ car }) {
    // use router to fetch dynamic uri
    const router = useRouter()
    const { id } = router.query

    // render dynamic data
    return (<>
        <Head>
            <title>{car.color} {car.id}</title>
        </Head>
        <h1>Hello {id}</h1>
        <img src={car.image} />
    </>)
}

// SSR approach
export async function getServerSideProps({ params }) {
    // fetch static data
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    // return props
    return {
        props: { car: data },
    }
}

// // SSG approach
// export async function getStaticProps({ params }) {
//     // fetch static data
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     // return props
//     return {
//         props: { car: data },
//     }
// }

// export async function getStaticPaths() {

//     const req = await fetch('http://localhost:3000/cars.json');
//     const data = await req.json();

//     const paths = data.map(car => {
//         return { params: { id: car } }
//     })

//     return {
//         paths,
//         fallback: false
//     };
// }
