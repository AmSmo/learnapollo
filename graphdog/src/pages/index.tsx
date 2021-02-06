import NavBar from "../components/NavBar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useDoggosQuery } from "../generated/graphql";
const Index = () => {
  const [{ data }] = useDoggosQuery();
  return (
    <div>
      <NavBar />
      YO!!!
      <br></br>
      {data ? (
        data.dogs.map((dog) => <p key={dog.id}>{dog.name}</p>)
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
