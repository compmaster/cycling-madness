package cyclingmadness.controllers;

import cyclingmadness.dto.Program;
import cyclingmadness.services.ProgramService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Handles requests related to training programs.
 *
 * @author compmaster
 */
@RestController
@CrossOrigin
public class ProgramController {

	@Autowired
	private ProgramService programService;

	@GetMapping("/programs")
	public List<Program> getPrograms() {
		return programService.getAllPrograms();
	}

	@GetMapping("/programs/{id}")
	public Program getProgram(@PathVariable long id) {
		return programService.getProgram(id);
	}

	@PostMapping("/programs")
	public void createProgram(@RequestBody Program program) {
		programService.createProgram(program);
	}

	@PutMapping("/programs/{id}")
	public void updateProgram(@RequestBody Program program) {
		programService.updateProgram(program);
	}

	@PatchMapping("/programs/{id}")
	public void updateField(String field, String value) {
		//TODO: not implemented
	}

	@DeleteMapping("/programs/{id}")
	public void deleteProgram(@PathVariable long id) {
		programService.deleteProgram(id);
	}

}
