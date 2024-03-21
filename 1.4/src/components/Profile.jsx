import { useEffect, useState } from "react";

const Profile = () => {
  async function getMyinfo() {
    const data = await fetch("https://api.github.com/users/sachu0dev");
    const json = await data.json();
    setName(json.name);
    setPublicRepos(json.public_repos);
    setImgUrl(json.avatar_url);
  }
  const [name, setName] = useState("name");
  const [publicRepos, setPublicRepos] = useState("0");
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    getMyinfo();
  }, []);
  return (
    <div>
      <h1>My Profile</h1>;<img src={imgUrl}></img>
      <h2>Name: {name}</h2>
      <h2>Publice repos: {publicRepos}</h2>
    </div>
  );
};

export default Profile;
