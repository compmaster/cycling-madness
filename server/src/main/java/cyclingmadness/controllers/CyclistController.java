package cyclingmadness.controllers;

import cyclingmadness.dto.Cyclist;
import cyclingmadness.services.CyclistService;
import java.net.URISyntaxException;
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
 * Handles requests related to cyclists.
 * @author compmaster
 */
@RestController
@CrossOrigin
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
	
	@PostMapping("/cyclists")
	public void addCyclist(Cyclist cyclist) throws URISyntaxException {
		cyclistService.createCyclist(cyclist);
	}
	
	@PutMapping("/cyclists/{id}")
	public void updateCyclist(@RequestBody Cyclist cyclist) {
		cyclistService.updateCyclist(cyclist);
	}
	
	@PatchMapping("/cyclists/{id}")
	public void updateField(String field, String value) {
		//TODO: not implemented
	}
	
	@DeleteMapping("/cyclists/{id}")
	public void deleteCyclist(@PathVariable int id) {
		cyclistService.deleteCyclist(id);
	}
	
}
