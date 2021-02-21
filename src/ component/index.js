import Buttons from "./Buttons";
import { connect } from "react-redux";
import { decrement } from "../redux/actions/decrement";
import { increment } from "../redux/actions/increment";

const mapStateToProps = (state) => ({
  numbe: state.number,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(increment(), decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
