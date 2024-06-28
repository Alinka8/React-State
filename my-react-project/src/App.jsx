import UserProfile from "./components/UserProfileComponent/UserProfile";
import MoviesList from "./components/UserProfileComponent/EnhancingComponents/MoviesList";

const App = () => {
  return (
    <>
      <div>
        <UserProfile />
        <MoviesList />
      </div>
    </>
  );
};

export default App;
