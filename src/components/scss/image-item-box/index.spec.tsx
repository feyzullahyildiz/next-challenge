import { render, fireEvent } from "@test";
import { ImageItemBox } from "./index";


describe("ImageItemBox", () => {
    let imageBoxProps: any;
    beforeEach(() => {
        imageBoxProps = {
            title: 'Main Title',
            subtitle: 'Sub Title',
            imageUrl: 'https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg'
        }
    })
    it("renders without crashing with clientSideImg", () => {
        const onClick = jest.fn();
        const { getByText, container } = render(
            <ImageItemBox
                clientSideImg={true}
                onClick={onClick}
                {...imageBoxProps}
            />
        );
        
        expect(() => getByText("Main Title")).not.toThrow()
        expect(() => getByText("Sub Title")).not.toThrow()

        const img = container.querySelector('img') as HTMLImageElement;

        expect(img).toBeDefined();
        expect(img.alt).toBe(imageBoxProps.title);
        expect(img.src).toBe(imageBoxProps.imageUrl);

        expect(onClick).toBeCalledTimes(0);
        fireEvent.click(container.querySelector('a') as any);
        expect(onClick).toBeCalledTimes(1);

    });
    it("renders without title", () => {
        const { title, subtitle, imageUrl } = imageBoxProps;
        const { getByText, container } = render(
            <ImageItemBox
                clientSideImg={false}
                subtitle={subtitle}
                imageUrl={imageUrl}
            />
        );

        expect(() => getByText(title)).toThrow()
        expect(() => getByText(subtitle)).not.toThrow()
    });
});

