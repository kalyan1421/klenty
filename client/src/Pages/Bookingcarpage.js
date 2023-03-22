import React, {useDebugValue, useEffect,useState } from 'react'
import Defaltlayout from '../components/Defaltlayout'
import { useSelector,useDispatch } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions'
// import {Link,Route,useParams} from 'react-router-dom'
import {Row,Col, Divider,DatePicker, Checkbox} from 'antd';
import moment from 'moment'
import { setDriver } from 'mongoose';
// import { params } from 'react-router-dom'
const {RangePicker} = DatePicker
function Bookingcarpage({Match}) {
  const {cars} = useSelector(state=>state.carsReducer)
  const dispatch = useDispatch()
  const[from , setFrom] = useState()
  const[to , setTo]=useState()
  const[totalHours , setTotalHours]= useState()
  const[driver , setDriver]=useState()
  const[totalAmount,setTotalAmount]=useState()


  useEffect(()=>{
    dispatch(getAllCars())
  },
  [])
  function selectTimeSlots(values){
    // console.log(values)
    // console.log(moment(values[0]).format('MM DD YYYY HH:mm'))
    // console.log(moment(values[1]).format('MM DD YYYY HH:mm'))
    setFrom(moment(values[0]).format('MM DD YYYY HH:mm'))
    setTo(moment(values[1]).format('MM DD YYYY HH:mm'))
    setTotalHours(values[1].diff(values[0], 'hours'))
  }
  useEffect(()=>{
    setTotalAmount((totalHours * 500))
    if(driver)
    {
      setTotalAmount(totalAmount + (30*totalHours))
    }
  },[driver , totalHours])

  return (
    <Defaltlayout>
              {cars.map(car=>{
            return  <Row justify='center' clasName='d-flex align-items-center ' style={{minHeight:'30vh' , paddingTop: '30px',}}>
              <Col lg={10} sm={24} xs={24}>
              <img src={car.imageUrl} className='carimg2'/>
              <div></div>
            </Col>

            <Col lg={10} sm={24} xs={24}   style={{textAlign: 'left'}} >
              <Divider type='horizontal'dashed> Car info</Divider>
              <div style={{textAlign: 'left'}}>
                <p>{car.name}</p>
                <p>{car.rentPerHour} Rent Per hour</p>
                <p>Fuel Type : {car.fueltype}</p>
                <p>Max Persons : {car.capacity}</p>
              </div>
              <Divider style={{textAlign: 'left'}} type='horizontal'dashed>Select Time Slot</Divider>
              <RangePicker  showTime={{format: "HH:mm "}} format='MM DD YYYY HH:mm' onChange={selectTimeSlots}/>
              <div style={{textAlign: 'left'}}>
                <p>Total Hours : <b>{totalHours}</b></p>
                <p>Rent Per Hour :<b>{car.rentPerHour}</b></p>
                <Checkbox style={{textAlign: 'right'}} onChange={(e)=>{
                  if(e.target.checked){
                    setDriver(true);
                  }
                  else{
                    setDriver(false);
                  }
                }}>Driver Required</Checkbox>
                <h3>Total Amount:{totalAmount}</h3>
              </div>
            </Col>
            </Row>
              
            })}
         
          {/* {cars.map(car=>{
            return 
            
          })} */}
          {/* <p>{car.rentPerHour}Rent Per Hour/-</p> */}
           {/* <img src={car.image}/> */}
    </Defaltlayout>
  )
}

export default Bookingcarpage