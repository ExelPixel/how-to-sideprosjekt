import ProjectList from "./components/project-list";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-100 text-gray-300 px-4">
      <title>Luka sin nettside</title>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-400">Luka sin nettside</h1>
        <p className="text-red-400">Hei, jeg heter Luka og studerer datateknologi på UiB</p>
        <img
          className="fit-picture"
          src="https://www.gcrieber-eiendom.no/wp-content/uploads/2021/11/Hoyteknologisenteret-GCR-02042-Foto_Tom__Jarane-3-scaled.jpg"
          alt="Høyteknologisenteret"
          width="500"
          height="500"
        />
        <ul className="text-red-400">
          <li>Tidlig liv</li>
          <li>Student</li>
          <li>Hobbyer</li>
        </ul>

        <h2 className="mt-5 text-red-400">Prosjekter på gang</h2>
        <ProjectList/>
      </div>
    </div>
  );
}
