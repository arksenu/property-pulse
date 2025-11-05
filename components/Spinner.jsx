'use client'
import { ClipLoader } from "react-spinners";

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ spinning }) => {
  return (
    <ClipLoader
        color='#3b82f6'
        loading={spinning}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
      />
  )
}

export default Spinner;