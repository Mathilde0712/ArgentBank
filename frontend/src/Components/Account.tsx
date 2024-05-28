import Button from "./Button";

const Account = ({title, amount, description}: {title : string, amount :string, description : string}) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button classe="transaction-button" content="View transactions" click={null} />
        
      </div>
    </section>
  );
};

export default Account;
