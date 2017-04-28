package cyclingmadness.dao;

import cyclingmadness.dto.Program;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 * JPA repository class for programs.
 *
 * @author compmaster
 */
public interface ProgramRepository extends CrudRepository<Program, Long> {

	@Override
	List<Program> findAll();

}
