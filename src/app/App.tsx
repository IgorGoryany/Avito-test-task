import { Layout } from '@/components/layout';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Main } from '@/pages/Main';
import { Film } from '@/pages/Film';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path=":id" element={<Film />} />
        </Route>
      </Routes>
    </div>
  );
};
