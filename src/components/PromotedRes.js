const PromotedRes = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default PromotedRes;
