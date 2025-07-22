import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-semibold">Welcome to My Application</h2>
        <p>This is the home page content.</p>
      </main>
    </div>
  );
}

export default Home;