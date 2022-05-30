import { useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { MdSearch } from 'react-icons/md'
import { ProgressSpinner } from 'primereact/progressspinner';
import DivisorsService from '../../services/divisors-service';
import { Messages } from 'primereact/messages';
import './table.css'

export const Table = () => {

  const [results, setResults] = useState([])
  const [number, setNumber] = useState()
  const [loading, setLoading] = useState(false)
  const messages = useRef(null);

  const findNumbers = async () => {
    try {
      setLoading(true)
      const numbers = await DivisorsService.getDivisorsAndPrimes(number)
      const result = { ...makeShowNumbers(numbers), number }
      console.log(results);
      setResults([...results, result])
      setLoading(false)

    } catch (err) {
      messages.current.show([
        { severity: 'error', summary: `error: ${err.response.status} - `, detail: ` ${err.response.data.error}`, closable: true, life: 5000,  }
    ]);
      setLoading(false)
      console.log(err);
    }
  }

  const makeShowNumbers = (numbers) => {
    return {
      divisorsNumbers: String(numbers.divisorsNumbers).replaceAll(',', ', '),
      primeNumbers: String(numbers.primeNumbers).replaceAll(',', ', ')
    }
  }

  return (
    <div className="table">

      <Messages ref={messages}></Messages>

      <DataTable value={results} paginator className="p-datatable-customers" rows={5}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[5]}
        dataKey="id" rowHover style={{ width: "80%" }}
        filterDisplay="menu" responsiveLayout="scroll" emptyMessage="No searchs"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
        <Column field="number" header="Number" style={{ minWidth: '14rem' }} />
        <Column field="divisorsNumbers" header="Divisors" style={{ minWidth: '14rem' }} />
        <Column field="primeNumbers" header="Divisors Prime" style={{ minWidth: '14rem' }} />

      </DataTable>
      <div className='input-numbers'>
        <InputText value={number} onChange={e => { setNumber(e.target.value) }} placeholder="Digit a number" />
        <button className='input-numbers-button' disabled={loading} onClick={findNumbers}>
          {!loading ?
            <>
              <MdSearch size="25px" color="black" />
              <span>Find divisors</span>
            </>
            :
            <>
              <ProgressSpinner style={{ height: "20px", margin: "0", width: "20px" }} />
              <span>Carregando...</span>
            </>}
        </button>
      </div>
    </div>
  )
}