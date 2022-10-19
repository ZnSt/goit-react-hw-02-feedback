import PropTypes from "prop-types";
import { Title, List, Item } from "./Staticstics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Title>Statistics</Title>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive fedback: {positivePercentage || 0}%</Item>
      </List>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
