import './home.css'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Table } from '../../components/table'

export default function Home() {
    return (
        <div className="home">
            <Header />
            <Table />
            <Footer />
        </div>
    )
}