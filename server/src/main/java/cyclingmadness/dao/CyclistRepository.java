package cyclingmadness.dao;

import cyclingmadness.dto.Cyclist;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 * JPA repository class for cyclists.
 * @author compmaster
 */
public interface CyclistRepository extends CrudRepository<Cyclist, Long> {
	
	@Override
	List<Cyclist> findAll();
	
}
