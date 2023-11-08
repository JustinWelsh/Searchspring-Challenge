// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { fetchProducts } from "./services/ProductService";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(userSearch);
        console.log("EFFECT", data);
        setResults(data.results);
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar
        userSearch={userSearch}
        setUserSearch={setUserSearch}
        setResults={setResults}
      />
      <div className="p-10 gap-3 grid grid-cols-2 sm:grid-cols-4">
        {results.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[500px]"
                src={item.thumbnailImageUrl}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">${item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
