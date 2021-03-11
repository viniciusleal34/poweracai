import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { routes } from '../../../routes/routes';
import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

type listagemTypes = {
  ativado?: string;
};

const Listagem: React.FC<listagemTypes> = ({ ativado }) => {
  const history = useHistory();
  return (
    <div>
      <>
        {routes.protected.map((route, index) => (
          <Container key={index} isAtivado={ativado === route.title}>
            <ListItem
              button
              key={index}
              onClick={() => history.push(route.path)}
            >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.title} />
            </ListItem>
          </Container>
        ))}
      </>
    </div>
  );
};
export default Listagem;
