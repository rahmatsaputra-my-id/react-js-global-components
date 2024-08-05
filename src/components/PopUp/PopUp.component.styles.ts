import { Colors } from '../../constants/Colors';

export const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  card: {
    boxShadow: Colors.boxShadow,
    padding: 24,
    borderRadius: 8,
    backgroundColor: Colors.grey7,
    width: 300,
    justifyContent: 'space-between',
  },
  headerTitle: {
    alignSelf: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerDescription: {
    alignSelf: 'center',
    marginBottom: 50,
    fontSize: 18,
  },
};
