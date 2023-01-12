import { render, screen } from '@testing-library/react';
import AllStories from '../components/AllStories';
import mockNewsData from '../mockNewsData.json';
import NewsConstructor from '../components/NewsConstructor';
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";

let mockArray = [];

beforeEach(() => {
    mockArray = mockNewsData.response.results;
});

describe('AllStory tests', () => {
    it('All news stories to have pictures', () => {
        render(<Router><AllStories allNewsData={mockNewsData.response.results} /></Router>);
        const imgElement = screen.getAllByRole('img', mockArray[0].id);
        expect(imgElement.length).toBeGreaterThan(0);
    });

    it('All news stories have a headline', () => {
        render(<Router><AllStories allNewsData={mockNewsData.response.results} /></Router>);
        const textElement = screen.getAllByRole('heading', mockArray[0].id);
        expect(textElement.length).toBeGreaterThan(0);
    });

    it("it should create a news object when the contructor is called passing in the arguments", () => {
        const [id, webPublicationDate, webTitle, webUrl, fields] = [
            "test id",
            "test webPublicationDate",
            "Test webTitle",
            "test webUrl",
            "test fields",
        ];

        const testNewsStory = new NewsConstructor(id, webPublicationDate, webTitle, webUrl, fields);

        expect(testNewsStory.id).toBe(id);
        expect(testNewsStory.webPublicationDate).toBe(webPublicationDate);
        expect(testNewsStory.webTitle).toBe(webTitle);
        expect(testNewsStory.webUrl).toBe(webUrl);
        expect(testNewsStory.thumbnail).toBe(fields.thumbnail);
    });

    //This test no longer works with my API set up. I wasn't able to work out why so I have created a new test below
    // it(`it should render the correct number of Stories according to the mock data supplied`, () => {
    //     const newsStories = mockNewsData.length;
    //     render(<AllStories allNewsdata={mockNewsData} />);
    //     const numberOfRows = screen.findAllByRole(`div`).length;

    //     expect(numberOfRows).toBe(newsStories);
    // });

});

describe('Headlines tests', () => {
    it('it should render the correct number of stories based on the mockNewsData array supplied', () => {
        // Arrange
        const mockNewsDataLength = mockNewsData.response.results.length;
        // Act
        render(<MemoryRouter><AllStories allNewsData={mockNewsData.response.results} /></MemoryRouter>);
        const numberOfStories = screen.getAllByTestId('stories').length;
        // Assert
        expect(numberOfStories).toBe(mockNewsDataLength);
    })
})
