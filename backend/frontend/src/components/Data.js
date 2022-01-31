import { useState } from "react";

function Data() {
  const [userData, setUserData] = useState(null);

  const getData = () => {
    fetch(`https://randomuser.me/api/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setUserData(data.results[0]);
        console.log(userData);
      });
  };

  return (
    <div>
      <button onClick={getData}>Fetch Data</button>
      {userData && (
        <p>
          {userData.name.first} {userData.name.last} - {userData.email}
        </p>
      )}
    </div>
  );
}

export default Data;
