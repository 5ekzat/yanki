import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/slices/productsSlices'
import style from './Categories.module.css'


const Categories = () => {
    const {productData}=useSelector((state)=>state.products)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
        
    },[])
    console.log(productData);
    const list = [];
    const findCategories = productData.reduce((total, el)=>{
      if (el.kategory && !list.includes(el.kategory)){
        list.push(el.kategory);
        total[el.kategory] = el;
      }
      return total;
    },{})
    const categoriesNew=Object.values(findCategories);
    console.log(categoriesNew);
  return (
    <div className={style.category}>
      <h2>Категории</h2>
      <div className={style.categoryBlocks}>
      {categoriesNew.slice(0, 4).map((category, index) => (
          <div className={style.categoryImages} key={index}>
            <img src={category.images} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories