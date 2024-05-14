@RestController
@RequestMapping("/api")
public class ChatController {

    @Autowired
    private LanguageModelService languageModelService;

    @PostMapping("/chat")
    public ResponseEntity<String> chat(@RequestBody String query) {
        // Generate response using language model
        String response = languageModelService.generateResponse(query);

        return ResponseEntity.ok(response);
    }
}
