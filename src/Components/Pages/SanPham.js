import { memo } from "react";
import { GiLindenLeaf, GiOpenBook } from "react-icons/gi";
import "../CSS/Slider.scss";
import 'react-multi-carousel/lib/styles.css';
import { BsCart4 } from "react-icons/bs";
import { TiHeartFullOutline } from "react-icons/ti";
import ReactPaginate from "react-paginate";
import data from "../Images/data"
import { IconContext } from "react-icons"; 
import { useEffect, useState } from "react"; 
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
function DisplayProduct() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
  };
  const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const n = 12;
  
    useEffect(() => {
      setFilterData(
        data.filter((item, index) => {
          return (index >= page * n) & (index < (page + 1) * n);
        })
      );
    }, [page]);

  return (
    <div className="Collection">
      <h3>SÁCH</h3>
      <p><GiOpenBook size={30} /></p>
      <div className="Slider">
        <div className="wrap">
      {filterData && filterData.map((item, index) => 
       
       <div className="ele">
         <a href={item.link}><img src={item.pic}></img></a>
         <div className="card-hover">
         <button><BsCart4 size={30} /></button>
          <button><TiHeartFullOutline size={30}/></button>
          </div>
         </div>
        )}
        </div>
          <ReactPaginate
          containerClassName={"Slide"}
          activeClassName={"page-active"}
          pageClassName={"page-item"}
          onPageChange={(event) => setPage(event.selected)}
          breakLabel="..."
          pageCount={Math.ceil(data.length / n)}
          previousLabel={
            <IconContext.Provider value={{ size: "" }}>
              <div className="move"><GoChevronLeft /></div>
            </IconContext.Provider>
          }
          nextLabel={
            <IconContext.Provider value={{ size: "" }}>
              <div className="move"><GoChevronRight /> </div>
            </IconContext.Provider>
          }
        />

      </div>
     </div>
  );
}

export default memo(DisplayProduct);
