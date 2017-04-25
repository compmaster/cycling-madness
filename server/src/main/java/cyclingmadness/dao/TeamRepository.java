package cyclingmadness.dao;

import cyclingmadness.dto.Team;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 * JPA repository class for teams.
 * @author compmaster
 */
public interface TeamRepository extends CrudRepository<Team, Long> {
	
	@Override
	List<Team> findAll();
	
}
