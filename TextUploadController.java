@RestController
@RequestMapping("/api")
public class TextUploadController {

    @Autowired
    private VectorDBService vectorDBService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadText(@RequestBody String text) {
        // Convert text into chunks
        List<String> textChunks = TextProcessor.splitTextIntoChunks(text);

        // Convert text chunks into embeddings
        List<float[]> embeddings = EmbeddingModel.generateEmbeddings(textChunks);

        // Store embeddings in vector database
        vectorDBService.saveEmbeddings(embeddings);

        return ResponseEntity.ok("Text uploaded and processed successfully.");
    }
}
