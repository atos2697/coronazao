import "./HomeSlider.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const HomeSlider = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/propiedades`;
    history.push(path);
  };

  return (
    <div id="changos">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img
              className="img"
              src="https://1.bp.blogspot.com/-0F1bzBLInJ4/WTq1u9J5VHI/AAAAAAAAJss/bieBCWoAw4wlmdMa4eT3XBDc4uC6sj1_ACLcB/s1600/Luxury%2BVilla%2BAlicante%252C%2BSpain%2B1.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://www.cherrygrove.co.za/content/uploads/2016/08/unique-beautiful-houses-on-home-garden-with-beautiful-homes-design-ideas.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLo_fF2y-vYlehirNhXpnAlsN3NHD9nImAVw&usqp=CAU"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://images.homify.com/c_fill,f_auto,q_0,w_740/v1468500630/p/photo/image/1584253/_98R7331.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://static.dezeen.com/uploads/2018/01/hale-nukumoi-housa-walker-warner-architects-residential-hawaii-usa_dezeen_2364_hero2-1704x959.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://www.renov8sa.co.za/wp-content/uploads/2017/10/Modern-Clifton-Mansion.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://www.impressiveinteriordesign.com/wp-content/uploads/2014/11/Brighton-House-by-InForm.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://www.impressiveinteriordesign.com/wp-content/uploads/2014/11/The-Kew-House-3-by-Vibe-Design-Group.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://www.wonderslist.com/wp-content/uploads/2013/12/most-Luxurious-Houses.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://1.bp.blogspot.com/-0F1bzBLInJ4/WTq1u9J5VHI/AAAAAAAAJss/bieBCWoAw4wlmdMa4eT3XBDc4uC6sj1_ACLcB/s1600/Luxury%2BVilla%2BAlicante%252C%2BSpain%2B1.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://www.cherrygrove.co.za/content/uploads/2016/08/unique-beautiful-houses-on-home-garden-with-beautiful-homes-design-ideas.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLo_fF2y-vYlehirNhXpnAlsN3NHD9nImAVw&usqp=CAU"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://images.homify.com/c_fill,f_auto,q_0,w_740/v1468500630/p/photo/image/1584253/_98R7331.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://static.dezeen.com/uploads/2018/01/hale-nukumoi-housa-walker-warner-architects-residential-hawaii-usa_dezeen_2364_hero2-1704x959.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://www.renov8sa.co.za/wp-content/uploads/2017/10/Modern-Clifton-Mansion.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://www.impressiveinteriordesign.com/wp-content/uploads/2014/11/Brighton-House-by-InForm.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://www.impressiveinteriordesign.com/wp-content/uploads/2014/11/The-Kew-House-3-by-Vibe-Design-Group.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
          <div className="slide">
            <img
              className="img"
              src="https://www.wonderslist.com/wp-content/uploads/2013/12/most-Luxurious-Houses.jpg"
              alt="Property"
              onClick={routeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
