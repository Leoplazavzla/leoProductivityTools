import React, {useEffect, useState} from 'react';
import CompaniesTableFormatter from '../tableFormatters/CompaniesTableFormatter'
import MaterialReactTable from 'material-react-table';
import * as CompaniesApi from "../Api/companiesApi";
import BaseLayout from "../BaseLayout";


const CompaniesPage = () => {
  const [data, setData] = useState()
  const columns = CompaniesTableFormatter();
  const options = {
      filter: true,
      sort: true,
  }

  useEffect( () => {
    CompaniesApi.getAllCompanies().then( result => setData(result.data))
  }, [])
    console.log(data)

    return (
      <BaseLayout>
          {data?
            <MaterialReactTable
              columns ={columns}
              data ={data}
              state={data}
            />
            :
            <div>Hola</div>
          }


      </BaseLayout>
    );


};

export default CompaniesPage;