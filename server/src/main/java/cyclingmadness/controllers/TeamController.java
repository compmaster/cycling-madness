package cyclingmadness.controllers;

import cyclingmadness.dto.Team;
import cyclingmadness.services.TeamService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Handles requests related to teams.
 *
 * @author compmaster
 */
@RestController
@CrossOrigin
public class TeamController {

	@Autowired
	TeamService teamService;

	@GetMapping("/teams")
	public List<Team> getTeams() {
		return teamService.getAllTeams();
	}

	@GetMapping("/teams/{id}")
	public Team getTeam(@PathVariable long id) {
		return teamService.getTeam(id);
	}

	@PostMapping("/teams")
	public void createTeam(Team team) {
		teamService.createTeam(team);
	}

	@PatchMapping("/teams/{id}")
	public void updateField(String field, String value) {
		//TODO: not implemented
	}

	@DeleteMapping("/teams/{id}")
	public void deleteTeam(@PathVariable long id) {
		teamService.deleteTeam(id);
	}

}
