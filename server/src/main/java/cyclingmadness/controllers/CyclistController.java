package cyclingmadness.controllers;

import cyclingmadness.dto.Cyclist;
import cyclingmadness.services.CyclistService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Handles requests related to cyclists.
 * @author compmaster
 */
@RestController
public class CyclistController {
	
	@Autowired
	private CyclistService cyclistService;
	
	@GetMapping("/cyclists")
	public List<Cyclist> getCyclists() {
		return cyclistService.getAllCyclists();
	}
	
	@GetMapping("/cyclists/{id}")
	public Cyclist getCyclist(@PathVariable int id) {
		return cyclistService.getCyclist(id);
	}
	
}
