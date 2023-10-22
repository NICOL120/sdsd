import classNames from 'classnames';
import { useAllDaosQuery } from 'dao/hooks/useAllDaosQuery';
import { LabeledPageSection } from 'lib/ui/LabeledPageSection';
import { SameWidthChildrenRow } from 'lib/ui/Layout/SameWidthChildrenRow';
import { DAOCard } from 'pages/shared/DAOCard';
import styles from './TopDAOs.module.css';

export const RecentDAOs = () => {
  const { data = [] } = useAllDaosQuery();

  const daos = data.sort((a, b) => (b.tvl ?? 0) - (a.tvl ?? 0)).slice(0, 6);

return (
    <div className={classNames(styles.card)}>
      <SameWidthChildrenRow maxColumns={3} fullWidth minChildrenWidth={320} gap={16}>
        {daos.map((dao, index) => (
          <DAOCard key={index} dao={dao} />
        ))}
      </SameWidthChildrenRow>
  );
