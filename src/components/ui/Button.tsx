type Props = {
    children: JSX.Element | JSX.Element[];
  };
  export const Button = ({ children }: Props) => {
    return (
      <button
        type="button"
        className="text-white bg-blue-600 
              hover:bg-blue-700 
              focus:ring-4 
              focus:outline-none 
              active:ring-blue-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
      >
        {children}
      </button>
    );
  };
  