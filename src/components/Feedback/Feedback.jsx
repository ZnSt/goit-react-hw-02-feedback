import PropTypes from "prop-types";

import { TitleFd, ListFd, ItemFd, BtnFd } from "./Feedback.styled";

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <TitleFd>Please leave feedback</TitleFd>
      <ListFd>
        {options.map((option) => {
          return (
            <ItemFd key={option}>
              <BtnFd
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option}
              </BtnFd>
            </ItemFd>
          );
        })}
      </ListFd>
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};
