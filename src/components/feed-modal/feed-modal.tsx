import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderInfo } from '../order-info';
import { Modal } from '@components';

export const FeedModal: FC = () => {
  const { number } = useParams<{ number: string }>();
  const navigate = useNavigate();

  if (!number) {
    return null;
  }

  return (
    <Modal title={`#${number}`} onClose={() => navigate(-1)}>
      <OrderInfo />
    </Modal>
  );
};
