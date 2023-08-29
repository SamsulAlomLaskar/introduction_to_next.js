import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // we can send a request to the backend to fetch the news based on the newsId

  return <h1>The Details Page</h1>;
}

export default DetailsPage;

// dynamic - routing/path with the help of []
