import React, { useMemo, useState, useEffect } from "react";
import Table from "./Components/Table";
import { getSuperHeros } from "./Services/SuperheroService";
import SuperHeroEditModal from "./Components/SuperHeroEditModal";
import "./App.css";

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Super Hero",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Power Stats",
            accessor: "power_stats"
          },
          {
            Header: "Synopsis",
            accessor: "synopsis"
          },
          {
            Header: "Starring",
            accessor: "starring"
          },
          {
            Header: "Directed by",
            accessor: "directed_by"
          },
          {
            Header: "Action",
            accessor: "id",
            Cell: cell => (
              <button id="edit-super-hero"
                onClick={e => {
                  showModal(e, cell.row.values.id);
                }}> Edit
              </button>
            )
          }
        ]
      },
    ],
    []
  );

  const [data, setData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [superHeroId, setSuperHeroId] = useState("")

  const showModal = (e, id) => {
    setSuperHeroId(id)
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onEditSuccess = () => {
    closeModal();
    getData()
  };

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    const result = await getSuperHeros()
    setData(result);
  }

  return (
    <div className="App">
      <Table columns={columns} data={data} />
      <SuperHeroEditModal
        id={superHeroId}
        isShow={modalIsOpen}
        onEditSuccess={onEditSuccess}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;