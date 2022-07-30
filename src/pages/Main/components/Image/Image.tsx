import { useState } from 'react'
import LoadingSpinner from 'pages/Main/components/Loader/LoadingSpinner';

export default function Image (props: any) {
const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    {isLoading && <LoadingSpinner/>}
    <img
        {...props}
        style={{...props.style, opacity: isLoading ? 0 : props?.style?.opacity}}
        onLoad={() => setIsLoading(false)}
    />
    </div>
  )
}