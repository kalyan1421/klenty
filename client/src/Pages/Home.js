import React, { useEffect } from 'react'
import Defaltlayout from '../components/Defaltlayout'
import { useSelector,useDispatch } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions'
import {Link} from 'react-router-dom'
import {Row,Col, Button} from 'antd';
// import Spinner from '../components/Spinner';



function Home() {
  const {cars} = useSelector(state=>state.carsReducer)
  // const {loading} = useSelector(state=>state.alertsreducer)
  const dispatch = useDispatch()
  // const carid = car._id;


  useEffect(()=>{
    dispatch(getAllCars())
  },
  [])

  return (
  <Defaltlayout>
    
    {/* {loading == true && (<Spinner/>)} */}
      
    <Row 
      gutter={16} className='mt-2'>

      {cars.map(car=>{
        return <Col lg={5} sm={24} xs={24}>
          <div className="Car p-2 bs1">
            <img src={car.imageUrl} className="caring"/>
            <div className='car-content d-flex align-items-center justify-content-between'>
              
              <div>
                <p>{car.name}</p>
                <p>{car.rentPerHour}Rent Per Hour/-</p>
              </div>
            
            <div>
              <Button className='btnl mr-2'> <Link to='/bookingcarpage'>Book</Link></Button>
            </div>
          
          </div>
        </div>
        </Col>
      })}
    </Row>
  
    </Defaltlayout>
  
  )
}

export default Home