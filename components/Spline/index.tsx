import Spline from '@splinetool/react-spline';

export default function SplineImage() {
  return (
    <div>
      <Spline
        scene="https://prod.spline.design/AhElOOUYLLit6lVH/scene.splinecode" 
        style={{ width: '100%', height: '100%', borderRadius: '1.5rem' }}
      />
    </div>
  );
}