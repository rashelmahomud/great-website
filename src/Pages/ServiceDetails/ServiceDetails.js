import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';


const ServiceDetails = () => {
    const { servicesId } = useParams();
    const [service] = useServiceDetails(servicesId);
    // const [service, setService] = useState({});
    // useEffect(() => {
    //     const url = `http://localhost:5000/greatService/${servicesId}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setService(data))

    // }, [])

    return (
        <div className='d-flex mx-auto w-50'>
            <div>
                <h2>Welcome To Service Books:{service.name}</h2>
                <Link to={`/checkout/${servicesId}`}><button className='bg-primary text-white fw-bold border-none p-2'>Procide Checkout</button></Link>

            </div>
        </div>
    );
};

export default ServiceDetails;