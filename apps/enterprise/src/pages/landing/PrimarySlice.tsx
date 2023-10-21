import classNames from 'classnames';
import { Text } from 'lib/ui/Text';
import { useDisplay } from 'hooks';
import { useNavigate } from 'react-router';
import styles from './PrimarySlice.module.css';
import { HStack } from 'lib/ui/Stack';
import { ExternalLink } from 'components/link';

export const PrimarySlice = () => {
  const navigate = useNavigate();
  const { isMobile } = useDisplay();

  return (
    <div className={classNames(styles.btn, { [styles.mobile]: isMobile })}>
      <Text size={40} weight="bold">
        Nico Money Dao
      </Text>
      <HStack alignItems="center" gap={20}>
        <button className={classNames(styles.btn)} onClick={() => navigate('dashboard')}>
          Launch App
        </button>
      </HStack>
    </div>
  );
};
